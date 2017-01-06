class AnimalsComponent {
    beforeReady() {
        this.is = "example-animals";
    }

    get behaviors() {
        return [ExpressParentBehavior];
    }

    ready() {
        this.monkey = (req ,res) => {
            res.send('monkey');
        };

        this.lion = (req ,res) => {
            res.send('lion');
        };

        this.tiger = (req ,res) => {
            res.send('tiger');
        };
    }
}

Polymer(AnimalsComponent);
