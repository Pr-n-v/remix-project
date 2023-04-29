import { Form, useNavigation } from "@remix-run/react";

export default function () {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <main>
           <h1>Book details</h1>
      <Form method="post" id="user-form">
        <p>
          <label htmlFor="name">Username:</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
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