import React from 'react';
import Project from '../project/Project';
import { projects } from '../../helpers/projectsList';

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">

          {projects?.map((el, i) => (
            <Project
              title={el.title}
              img={el.img}
              key={i}
              index={i}
            />
          ))}

        </ul>
      </div>
    </main>
  );
}
