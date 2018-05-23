function component() {
    var element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = join(['Hello', 'webpack'], ' ');

    // Assume we are in the context of `window`
    this.alert("Hmmm, this probably isn't a great idea...");

    console.log('this:', this)
    return element;
}

document.body.appendChild(component());
