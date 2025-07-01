import { NextResponse } from "next/server";

export function success(data, status = 200) {
  return NextResponse.json({ success: true, data }, { status });
}

export function error(message = "Something went wrong", status = 500) {
  return NextResponse.json({ success: false, message }, { status });
}
