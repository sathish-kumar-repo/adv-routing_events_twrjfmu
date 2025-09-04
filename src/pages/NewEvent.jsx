import EventForm from "../components/EventForm";

function NewEventPage() {
  function submitHandler(event) {
    event.preventDefault();

    /**
     * And then we could extract data from the form

with help of two-way binding, or refs, for example.

And, we could then manually send our HTDP request here,

maybe manage some loading and error state,

and ultimately navigate

away from this page, once we're done.

We could navigate away with imperative,

and navigation, with help

of that use Navigate Hook I mentioned earlier

in this section.
     */

    // ! But we have better approach when using React Router
  }
  return <EventForm />;
}

export default NewEventPage;
