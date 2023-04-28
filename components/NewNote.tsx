import { Form, useNavigation } from "@remix-run/react";

export default function () {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <main>
        <h1>Hey there,please enter your attendance for the day!!</h1>
      <Form method="post" id="att-form">
        <p>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="srn">SRN:</label>
          <input type="text" id="srn" name="srn" required />
        </p>
        <p>
            <label htmlFor="sem">Semester:</label>
            <input type="text" id="sem" name="sem" required />
        </p>
        <p>
            <label htmlFor="attendance">Student attendace: </label>
            <br />
            Present <input type="radio" id="present" name="attendance" value="present" />
            <br />
            Absent <input type= "radio" id="absent" name="attendance" value="absent" />
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