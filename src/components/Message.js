import React from "react";

const Message = () => {
  return (
    <section className="message message_card">
      <img className="message__logo" src="/images/mess.png" alt="Message" />
      <div className="message__body">
        <p className="message__heading">Geo Message</p>
        <p className="message__text">
          The results of yesterday elections came as a surprise to most of us,
          regardless of our political views. It will take time for us to
          process and understand the meaning of the vote.
        </p>
      </div>
    </section>
  );
}

export default Message;