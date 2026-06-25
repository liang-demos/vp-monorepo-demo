set shell := ["bash", "-eu", "-o", "pipefail", "-c"]

default: fmt-check

fmt:
  cd nested && vp fmt
  cd override && vp fmt

fmt-check:
  cd nested && vp fmt --check
  cd override && vp fmt --check

i:
  cd nested && vp i
  cd override && vp i
