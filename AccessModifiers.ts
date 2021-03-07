// public - all members by default are public. Its not like in C#... in C# all of them are private.

// private

// protected

class SomeClass {
    a: number; // will be public
    public b: number; // also public, but in TS unless like in C#, here we better not say out loud its public, its redundant
    protected c: number;
    private d: number;
}

class OtherClass extends SomeClass{

}