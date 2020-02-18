(module
  (func $min10 (param $x i32) (result i32)
   (if (result i32)
    (i32.lt_s
     (get_local $x)
     (i32.const 10)
    )
    (then
     (i32.const 10)
    )
    (else
     (get_local $x)
    )
   )
  )  
  (export "min10" (func $min10))
)