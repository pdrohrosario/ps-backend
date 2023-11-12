-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "children" TEXT,
    "feedback_frequence" INTEGER,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parent_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    CONSTRAINT "Contact_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Contact_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "response" TEXT,
    "child" TEXT NOT NULL,
    "parent_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    CONSTRAINT "Feedback_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Feedback_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
