import { Form, useNavigation } from "@remix-run/react";

export default function () {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <main>
           <h1>Book details</h1>
      <Form method="post" id="library-form">
        <p>
          <label htmlFor="name">Book name:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
            <label htmlFor="author">Author name:</label>
            <input type="text" id="author" name="author" required />
        </p>
        <p>
          <label htmlFor="language">Language:</label><br />
         <label htmlFor="english"> English</label>
         <input type="radio" id="english" name="language" required />
         <label htmlFor="hindi">  Hindi</label>
         <input type="radio" id="hindi" name="language" required />
         <label htmlFor="german">  German</label>
         <input type="radio" id="german" name="language" required />
         <label htmlFor="russian">  Russian</label>
         <input type="radio" id="russian" name="language" required />
        </p>
        <p>
            <label htmlFor="genre">Genre:</label>
            <input type="text" id="genre" name="genre" required />
        </p>
        <p>
            <label htmlFor="borrow">Date of borrowing:</label>
            <input type="date" id="borrow" name="borrow" required />
        </p>
        <p>
        <label htmlFor="return">Date of returning:</label>
            <input type="date" id="returner" name="returner" required /> 
        </p>
        <p>
            <label htmlFor="">Is the book being taken/returned: </label>
            <br />
            Taken <input type="radio" id="taken" name="status" value="taken" />
            <br />
            Available <input type= "radio" id="returned" name="status" value="available" />
        </p>
        <div className="form-actions">
          <button disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Note"}
          </button>
        </div>
      </Form>
    </main>
  );
}