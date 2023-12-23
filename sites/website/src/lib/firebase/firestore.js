import { basename } from "path"
import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  limit,
  addDac
} from "firebase/firestore"

import { db } from "@/lib/firebase/app"
import { imageURL } from "@/lib/firebase/storage"

function applyQueryFilters(q, { slug, category, status, ...params }) {
  if (slug) {
    q = query(q, where("slug", "==", basename(slug)))
  }
  if (category) {
    q = query(q, where("category", "==", category))
  }
  if (status) {
    q = query(q, where("status", "==", status))
  }
  if (params.offset > 0) {
    q = query(q, offset(params.offset))
  }
  if (params.limit > 0) {
    q = query(q, limit(params.limit))
  }
  // q = query(q, orderBy("createdat", "desc"))
  return q
}

export async function retrieveAnnounces(filters = {}) {
  const c = query(collection(db, "announces"))
  filters.status = filters.status ? filters.status : "published"
  const q = applyQueryFilters(c, filters)
  const r = await getDocs(q)
  return r.docs.map((d) => {
    const data = d.data()
    data.date = new Date(data.createdat.seconds * 1000).toLocaleString()
    return {
      id: d.id,
      ...data
    }
  })
}

export function retrieveAnnouncesSnapshot(cb, filters = {}) {
  if (typeof cb !== "function") {
    console.error("Error: The callback parameter is not a function")
    return
  }
  const c = query(collection(db, "announces"))
  const q = applyQueryFilters(c, filters)
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const r = querySnapshot.docs.map((d) => {
      const data = d.data()
      data.date = new Date(data.createdat.seconds * 1000).toLocaleString()
      return {
        id: d.id,
        ...data
      }
    })
    cb(r)
  })
  return unsubscribe
}

export async function announceBySlug(slug) {
  if (!slug) {
    console.error("Error: Invalid slug received: ", slug)
    return
  }
  return await retrieveAnnounces({ slug: slug, limit: 1 })
}
