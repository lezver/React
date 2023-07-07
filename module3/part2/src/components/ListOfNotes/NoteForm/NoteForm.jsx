import "./NoteFrom.scss";
import { Formik, Form, Field } from "formik";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const NoteForm = ({ onSubmit }) => {
	const hangleSubmit = (value, actions) => {
		onSubmit(value);
		actions.resetForm();
	};
	return (
		<Formik initialValues={{ name: "", text: "" }} onSubmit={hangleSubmit}>
			{({ isSubmitting }) => (
				<Form className="list-of-notes__note-from">
					<h2>Add new Note</h2>
					<label className="note-from__name">
						Name:
						<Field
							name="name"
							type="text"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							required
						/>
					</label>
					<label className="note-from__text">
						Note:
						<Field name="text" type="text" />
					</label>
					<button type="submit" disabled={isSubmitting}>
						<AiOutlinePlusCircle size={28} />
					</button>
				</Form>
			)}
		</Formik>
	);
};
