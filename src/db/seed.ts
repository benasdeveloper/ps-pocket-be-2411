import { addDays, addMinutes, subHours } from 'date-fns'
import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Wake up early', desiredWeeklyFrequency: 5 },
      { title: 'Go to School', desiredWeeklyFrequency: 5 },
      { title: 'Gym', desiredWeeklyFrequency: 3 },
    ])
    .returning()

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: new Date() },
    { goalId: result[1].id, createdAt: addDays(new Date(), 2) },
    { goalId: result[1].id, createdAt: subHours(new Date(), 2) },
  ])
}

seed().finally(() => {
  client.end()
})
