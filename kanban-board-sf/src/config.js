const LIST_TYPES = {
  BACKLOG: "Backlog",
  READY: "Ready",
  IN_PROGRESS: "InProgress",
  FINISHED: "Finished",
};

const LIST_COPY = {
  [LIST_TYPES.BACKLOG]: "Backlog",
  [LIST_TYPES.READY]: "Ready",
  [LIST_TYPES.IN_PROGRESS]: "In progress",
  [LIST_TYPES.FINISHED]: "Finished",
};

export { LIST_TYPES, LIST_COPY };
