import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl md:text-4xl font-semibold  mb-2 md:mb-4 text-center">
          FAQ
        </h2>
        <p className="text-gray-500 text-sm md:text-lg mb-4 md:mb-8 text-center">
          Frequently Asked Questions
        </p>
      </div>

      <div className="space-y-3 my-4" >
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            How do I create an assignment?
          </div>
          <div className="collapse-content">
            <p>
              To create an assignment, go to your dashboard and click on the{" "}
              <Link to="/createAssignment">Create Assignment</Link> button. You
              can then fill in the details, set the due date, and add any
              necessary instructions for your friends.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How can I complete an assignment?
          </div>
          <div className="collapse-content">
            <p>
              You can complete an assignment by clicking on the assignment you
              want to work on from your dashboard. Follow the instructions
              provided and submit your work by the due date.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I grade my friends assignments?
          </div>
          <div className="collapse-content">
            <p>
              To grade your friends assignments, go to the assignment list and
              click on the assignment you want to grade. You will be able to
              review the work submitted by your friends and provide a grade or
              feedback.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            What happens if I miss the assignment deadline?
          </div>
          <div className="collapse-content">
            <p>
              If you miss the assignment deadline, you may not be able to submit
              your work or receive a grade for that assignment. It is important
              to complete assignments on time to ensure a fair grading process.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          Is my data and personal information secure on this website?
          </div>
          <div className="collapse-content">
            <p>
            We take data security and privacy seriously. Your personal information is securely stored and protected. You can learn more about our privacy policy in the Privacy section of the website.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
