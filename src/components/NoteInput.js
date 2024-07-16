import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxCharacter: 50,
      limit: 50,
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const minChar = event.target.value.slice(0, this.state.limit);
    const lengthChar = minChar.length;
    this.setState(() => {
      return {
        title: minChar,
        maxCharacter: this.state.limit - lengthChar,
      };
    });
  }

  onBodyChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title note-input__title__char-limit">Sisa Karakter : {this.state.maxCharacter}</p>
          <input type="text" placeholder="Judul" value={this.state.name} onChange={this.onTitleChangeHandler} />
          <textarea placeholder="Tulis Catatan" rows="10" value={this.state.tag} onChange={this.onBodyChangeHandler}></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
