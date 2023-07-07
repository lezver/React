import "./ListOfNotes.scss";
import { Component } from "react";
import { NoteForm } from "./NoteForm";
import { List } from "./List";
import { addNote, getNotes, deleteNote, updateNote } from "components/Services";

export class ListOfNotes extends Component {
	state = {
		notes: [],
		isLoading: false,
	};

	async componentDidMount() {
		try {
			this.setState({ isLoading: true });
			const notes = await getNotes();
			this.setState({ notes, isLoading: false });
		} catch (error) {
			console.log(error);
		}
	}

	createNewNote = async (value) => {
		try {
			this.setState({ isLoading: true });

			const note = await addNote(value);

			this.setState((prevState) => ({
				notes: [...prevState.notes, note],
				isLoading: false,
			}));
		} catch (error) {
			console.log(error);
		}
	};

	deleteNote = async (id) => {
		try {
			await deleteNote(id);
			this.setState((prevState) => ({
				notes: prevState.notes.filter((item) => item.id !== id),
			}));
		} catch (error) {
			console.log(error);
		}
	};

	EditNote = async (newNote) => {
		try {
			const editNote = await updateNote(newNote);
			this.setState((prevState) => ({
				notes: prevState.notes.map((note) =>
					note.id === newNote.id ? editNote : note
				),
			}));
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { isLoading, notes } = this.state;
		return (
			<section className="list-of-notes">
				<NoteForm onSubmit={this.createNewNote} />
				{isLoading ? (
					<p className="list-of-notes__loading">Loading ...</p>
				) : (
					<List
						list={notes}
						onDelete={this.deleteNote}
						updateNote={this.EditNote}
					/>
				)}
			</section>
		);
	}
}
