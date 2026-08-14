from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from database import Base, SessionLocal, engine
from models import Note
from schemas import NoteCreate


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Notes API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/notes")
def create_note(n: NoteCreate):
    db = SessionLocal()

    try:
        note = Note(
            title=n.title,
            content=n.content
        )

        db.add(note)
        db.commit()
        db.refresh(note)

        return note
    finally:
        db.close()


@app.get("/notes")
def get_notes():
    db = SessionLocal()

    try:
        return db.query(Note).all()
    finally:
        db.close()


@app.put("/notes/{id}")
def update_note(id: int, n: NoteCreate):
    db = SessionLocal()

    try:
        note = db.query(Note).filter(Note.id == id).first()

        if not note:
            raise HTTPException(
                status_code=404,
                detail="Note not found"
            )

        note.title = n.title
        note.content = n.content

        db.commit()
        db.refresh(note)

        return note
    finally:
        db.close()


@app.delete("/notes/{id}")
def delete_note(id: int):
    db = SessionLocal()

    try:
        note = db.query(Note).filter(Note.id == id).first()

        if not note:
            raise HTTPException(
                status_code=404,
                detail="Note not found"
            )

        db.delete(note)
        db.commit()

        return {"message": "Note deleted successfully"}
    finally:
        db.close()