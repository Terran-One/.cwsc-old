use codegen::Scope;
use codegen::Struct;

pub fn main() {
    let scope = Scope::new();

    println!("{:?}", Struct::new("Transfer").);
}
