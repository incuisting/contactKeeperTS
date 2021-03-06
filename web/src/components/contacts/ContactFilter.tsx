import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef<HTMLInputElement>(null);

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null && text.current) {
      text.current.value = "";
    }
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text.current && text.current.value !== "" && filterContacts) {
      filterContacts(e.target.value);
    } else if (clearFilter) {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="过滤联系人..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
