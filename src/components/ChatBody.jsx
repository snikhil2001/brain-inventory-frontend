import React from "react";

const ChatBody = ({ messages, name }) => {
  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="leaveChat__btn">{name}</button>
      </header>

      {/*This shows messages sent from you*/}
      <div className="message__container">
        {messages.map((el) =>
          el.name === name ? (
            <div key={el.id} className="message__chats">
              <p className="sender__name">You</p>
              <div className="message__sender">
                <p>{el.text}</p>
              </div>
            </div>
          ) : (
            <div key={el.id} className="message__chats">
              <p>{el.name}</p>
              <div className="message__recipient">
                <p>{el.text}</p>
              </div>
            </div>
          )
        )}

        {/*This shows messages received by you*/}

        {/*This is triggered when a user is typing*/}
        <div className="message__status">
          <p>Someone is typing...</p>
        </div>
      </div>
    </>
  );
};

export default ChatBody;
