export default function(date: Date | null): date is Date {
    return Object.prototype.toString.call(date) === '[object Date]';
}
