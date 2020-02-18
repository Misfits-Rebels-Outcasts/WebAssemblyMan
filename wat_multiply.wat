(module
  (func $multiply (param $lhs i32) (param $rhs i32) (result i32)
    get_local $lhs
    get_local $rhs
    i32.mul)
  (export "multiply" (func $multiply))
)