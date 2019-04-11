export default class DataProcessor {
    static process(response) {
        response = response.data;
        let target = response.target;
        if (target) {
            target = response.points[target]
        }
        return {
            target,
            points: response.points
        }
    }
}