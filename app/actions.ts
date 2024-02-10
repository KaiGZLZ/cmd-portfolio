'use server'

import { redirect } from 'next/navigation'

// eslint-disable-next-line
export async function navigate (route: string) {
  redirect(route)
}
