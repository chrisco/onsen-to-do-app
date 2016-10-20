const todoStorage = {
    collection: [],
    init() {
        this.collection = JSON.parse(localStorage.getItem('todo') || []);
    },
    hasItem(label) {
        (item) => item.label === label;
    },
    save() {
        localStorage.setItem('todo', JSON.stringify(this.collection));
    },
    add(label) {
        if (this.hasItem(label)) {
            return false;
        }
        this.collection.push({
            label,
            status: 'uncompleted'
        });

        this.save()
        return true;
    },
    add(label) {
        if (this.hasItem(label)) {
            return false;
        }
        this.collection.push({
            label,
            status: 'uncompleted'
        });

        this.save()
        return true;
    },
    remove(label) {
        if (!this.hasItem('label')) {
            return false;
        }
        this.collection.forEach(function(item, i) {
            if (item.label === label) {
                this.collection.splice(i, 1);
            }
        })
    },
    toggle(label) {
        if (!this.hasItem('label')) {
            return false;
        }
        this.collection.forEach(function(item, i) {
            if (item.label === label) {
                item.status = item.status === 'completed' ? 'uncompleted' : 'completed';
            }
        })
    },
    filter(status) {
        if (status === 'all') {
            return this.collection;
        }
        return this.collection.filter((item) => item.status === status);
    }
}
