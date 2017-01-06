class AppComponent {
    beforeReady() {
        this.is = 'example-app';
    }

    ready() {
        this.index = (req, res) => {
            res.send('It works!!!');
        };

        this.notFound = (req, res) => {
            res.status(404).send('Not found');
        };
    }
}

Polymer(AppComponent);
