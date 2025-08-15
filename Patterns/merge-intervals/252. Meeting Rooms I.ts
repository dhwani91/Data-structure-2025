/*
* Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.
* Example 1:

Input: intervals = [(0,30),(5,10),(15,20)]

Output: false
Explanation:

(0,30) and (5,10) will conflict
(0,30) and (15,20) will conflict
Example 2:

Input: intervals = [(5,8),(9,15)]

Output: true
Note:

(0,8),(8,10) is not considered a conflict at 8
Constraints:

0 <= intervals.length <= 500
0 <= intervals[i].start < intervals[i].end <= 1,000,000

* */

type Interval = { start: number; end: number };
function canAttendMeetings(intervals: Interval[]) {
    intervals.sort((a,b) => a.start - b.start)
    for(let i= 1; i< intervals.length;i++){
        if(intervals[i-1].end >  intervals[i].start) {
            return false;
        }
    }
    return true;
}

console.log(canAttendMeetings( [
    { start: 0, end: 5 },
    { start: 6, end: 10 }
]));
console.log(canAttendMeetings( [
    { start: 0, end: 7 },
    { start: 6, end: 10 }
]));
console.log(canAttendMeetings([]))