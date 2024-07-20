```
const a = {};

let b = a;
const dummy = {
    "a" : "b"
}

b.next = dummy;
b = dummy;
<!-- b = JSON.parse(JSON.stringify(dummy)); -->

const dummy2 = {
    "b" : "c"
}

b.next = dummy2;

console.log(b);
```

Here we are assigning a to b
and then b.next so that key will also added in a also
and then we are assigning dummy to b so here if we
added any key in b.next so it will also added in dummy.next and that also added in a also

so how this is all work

if you want to deep copy then you can also parse and
stringify it