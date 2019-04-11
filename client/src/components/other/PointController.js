import React, { Component } from 'react';
import Axios from 'axios';
import Points from '../Home/Points';
import DataProcessor from './DataProcessor';

export default class PointController extends Component {
    constructor(props) {
        super(props)
        this.swap = this.swap.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.reset = this.reset.bind(this);
        this.processResponse = this.processResponse.bind(this);
    }
    // Swap is just update but where the id has changed.
    swap(new_point, from_id = new_point.id, add_link = false) {
        console.log("Swapped.")
        let { points, top, focus } = this.state
        let is_top = false;
        let is_link = false;
        let index = -1;
        console.log("%cSwapping:", "font-size: 20px;")
        console.log(points[from_id])
        console.log("with")
        console.log(new_point)
        if (from_id == top) {
            is_top = true;
        }
        if (points[top].links.includes(from_id)) {
            is_link = true;
        }

        if (is_top) {
            top = new_point.id
            focus = 0
        }
        if (is_link) {
            let top_point = points[top]
            index = top_point.links.indexOf(from_id);
            if (add_link) {
                if (points[top].links.indexOf(new_point.id) == -1) {
                    Axios.post("/points/links/create", {
                        point1: points[top].id,
                        point2: new_point.id,
                        order: index
                    })
                }
            }
            top_point.links[index] = new_point.id
            points[top] = top_point
        }
        points[new_point.id] = new_point
        if (new_point.new) {
            this.setState({ points, top, focus })
            return Promise.resolve(new_point)
        }
        this.setState({ points, top, focus })
        return Axios.post("/points/view", {
            id: new_point.id
        }).then(this.processResponse).then((point) => {
            console.log("Request resolved, setting state.")
        })
    }
    create(point) {
        return Axios.post("/points/create", {
            text: point.text
        }).then(this.processResponse)
    }
    update(point) {
        return Axios.post("/points/update", point).then(this.processResponse)
    }
    delete(point) {
        return Axios.post("/points/delete", point).then((res) => {
            return null;
        })
    }
    insert(point, index) {
        let { points } = this.state
        points[point.id] = point
        let top_point = points[this.state.top]
        top_point.links.splice(index, 0, point.id)
        points[top_point.id] = top_point
        this.setState({ points })
        if (point.new) {
            return
        }
        return Axios.post("/points/view", {
            id: point.id
        }).then(this.processResponse).then((point) => {
            return Axios.post("/points/links/create", {
                point1: top_point.id,
                point2: point.id,
                order: index
            }).then(Promise.resolve(point))
        })
    }
    unlink(point) {
        let { points } = this.state
        let top_point = points[this.state.top]
        let index = top_point.links.indexOf(point.id)
        if (index == -1) {
            console.error(`Point ${point.id} tried to be unlinked; but it was not linked in the first place.`)
            return Promise.resolve()
        }
        top_point.links.splice(index, 1)
        points[top_point.id] = top_point
        this.setState({ points })
        if (point.new) {
            return Promise.resolve()
        }
        return Axios.post("/points/links/delete", {
            point1: top_point.id,
            point2: point.id
        }).then(Promise.resolve())
    }
    reset(point) {
        return this.swap(Points.generateNew(), point.id)
    }
    processResponse(res) {
        let { target, points } = DataProcessor.process(res)
        this.use(points)
        console.log("%cProcessing:", "font-size: 20px;")
        console.log(target)

        return Promise.resolve(target);
    }
    // Private
    use(new_points) {
        let { points } = this.state
        for (let k in new_points) {
            if (points[k]) {
                if (new_points[k].links) {
                    if (points[k].links) {
                        let links = points[k].links
                        let new_link = links.find((link) => link.startsWith("new"))
                        if (new_points[k].links) {
                            points[k].links = new_points[k].links
                        }
                        if (new_link && false) {
                            points[k].links.push(new_link)
                        }
                    } else {
                        points[k].links = new_points[k].links
                    }
                }

                points[k].text = new_points[k].text
            } else {
                points[k] = new_points[k]
            }
        }
        this.setState({ points })
    }
}