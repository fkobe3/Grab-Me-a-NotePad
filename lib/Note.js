class Note {
    constructor(id, title, body) {
        this.id = id,
        this.title = title,
        this.body = body
    }

    getId() {
        if(this.id)
            return this.id;
    }

    getTitle() {
        if(this.title)
            return this.title;
    }

    getBody() {
        if(this.body)
            return this.body;
    }
}

module.exports = Note;