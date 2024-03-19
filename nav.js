const nav = document.createElement('nav');
nav.className = 'navbar navbar-dark bg-primary navbar-expand-lg p-3';
nav.innerHTML = `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="../vue-instance/index.html">Vue Instance</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../vue-state/index.html">Vue State</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../vue-methods/index.html">Vue Methods</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../click-events/index.html">Click Events</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../binding-data/index.html">Binding Data</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../handling-input/index.html">Handling Input</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../handling-forms/index.html">Forms</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../conditional-rendering/index.html">Conditional Rendering</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../for-loops/index.html">For Loops</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../computed-properties/index.html">Computed Properties</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../watchers/index.html">Watchers</a>
    </li>
</ul>
</div>`;

function setActive() {
    const items = Array.from(nav.querySelectorAll('.navbar .nav-link'));
    const href = window.location.href;
    const el = items.filter(a => a.href == href);
    el.forEach(a => a.classList.add('active'));
}

setActive();

document.body.prepend(nav);