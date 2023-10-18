export const makePoll = (pollName, pollFields) => {
    const result = {}
    result["pollQuestion"] = pollName;
    result["answers"] = []
    pollFields.map((pollField)=>result["answers"].push({option: pollField,votes:0}))
    return result;
}