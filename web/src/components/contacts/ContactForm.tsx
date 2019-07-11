import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null && current) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal",
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const { name, email, phone, type } = contact;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (current === null && addContact && contact) {
      addContact(contact);
    } else if (updateContact) {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    if (clearCurrent) {
      clearCurrent();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">{current ? "编辑联系人" : "添加联系人"}</h2>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>联系人类型</h5>
      <input
        type="radio"
        name="type"
        value="personal"
        checked={type === "personal"}
        onChange={onChange}
      />{" "}
      个人{" "}
      <input
        type="radio"
        name="type"
        value="professional"
        checked={type === "professional"}
        onChange={onChange}
      />{" "}
      工作
      <div>
        <input
          type="submit"
          value={current ? "更新联系人" : "添加联系人"}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            清空
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
