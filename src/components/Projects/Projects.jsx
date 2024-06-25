import styles from './Projects.module.css';
import { SectionElement } from './SectionElement/SectionElement.jsx';
import { useEffect, useState } from 'react';
import * as projectService from '../../services/projectsService.js';

export const Projects = (props) => {
    useEffect(() => {
        projectService.getAll()
            .then(res => {
                setAllProjects(res)
            });
    }, []);

    const [allProjects, setAllProjects] = useState([]);

    return (
        <div className={styles["projects-container"]}>
            {allProjects.sort((a, b) => a.id - b.id)
                .map((p, i) => <SectionElement
                    key={p.id}
                    order={i}
                    {...p}
                />)}
        </div>
    )
}