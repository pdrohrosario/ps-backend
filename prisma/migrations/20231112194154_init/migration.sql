-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feedback" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "response" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "child" TEXT NOT NULL,
    "parent_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    CONSTRAINT "Feedback_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Feedback_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Feedback" ("child", "id", "parent_id", "question", "response", "teacher_id") SELECT "child", "id", "parent_id", "question", "response", "teacher_id" FROM "Feedback";
DROP TABLE "Feedback";
ALTER TABLE "new_Feedback" RENAME TO "Feedback";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
