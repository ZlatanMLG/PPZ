'use strict';

let hljs   = require('../../build');
let should = require('should');

describe('.highlight()', function() {
  it('should works without continuation', function() {
    const code   = `
    @startuml
    title Simple communication
    actor User
    participant "First Class" as A
    @enduml
    `;
    const result = hljs.highlight('plantuml', code, false, false);

    result.value.should.equal(
    `
    <span class="hljs-symbol">@startuml
</span>    <span class="hljs-title">title Simple communication
</span>    <span class="hljs-keyword">actor</span> User
    <span class="hljs-keyword">participant</span> <span class="hljs-string">"First Class"</span> <span class="hljs-literal">as</span> A
    <span class="hljs-symbol">@enduml
</span>    `
    );
  });
});
