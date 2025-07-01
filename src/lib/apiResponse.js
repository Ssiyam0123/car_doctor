import { NextResponse } from "next/server";

export const success = (data, status = 200) => {
  NextResponse.json({ success: true, data }, { status });
};

export const error = (message = "Server error", status = 500) => {
  NextResponse.json({ success: false, message }, { status });
};
