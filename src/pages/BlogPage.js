import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import staticData from '../data/blog';
import { set } from 'react-ga';

library.add(far, fas, fab);

const ArticleCards = () => (
    <article className="cards">
        {staticData.map((project) => (
            <Cell
                data={project}
                key={project.title}
            />
        ))}
    </article>
);

const sortDataBy = (data, sorting, ascending) => {
    const ascend = ascending ? 1 : -1;
    const nullToChar = (a) => a === undefined ? "" : a;

    if (sorting === "date") {
        return data.sort((a, b) => ascend * (new Date(b.date) - new Date(a.date)));
    } else if (sorting === "views") {
        return data.sort((a, b) => ascend * (b.views - a.views));
    } else if (sorting === "title") {
        return data.sort((a, b) => ascend * (a.title.localeCompare(b.title)));
    } else if (sorting === "type") {
        return data.sort((a, b) => ascend * (nullToChar(a.type).localeCompare(nullToChar(b.type))));
    }
};

const dateString = (date) => {
    return new Date(date).toDateString();
};

const fetchViews = async () => {
    let response = await fetch('https://alperenkelescom.fly.dev/views', {
        method: 'GET',
    });
    let data = await response.json();
    data['timestamp'] = new Date().getTime();
    localStorage.setItem("blogData", JSON.stringify(data));
    return data;
};

export const ArticleList = (props) => {
    const [sorting, setSorting] = React.useState(props.sorting || "date");
    const [ascending, setAscending] = React.useState(true);
    const [augmentedData, setAugmentedData] = React.useState(null);
    const [sortedData, setSortedData] = React.useState(null);

    useEffect(() => {
        // Check if views are up to date
        fetchViews().then((data) => {
            console.log(data);
            staticData.forEach((project) => {
                let localProject = data.find((v) => v._id === project.id);

                if (localProject) {
                    project.views = localProject.views;
                } else {
                    project.views = 0;
                }
            });
            setAugmentedData([...staticData]);
        });
    }, []);

    useEffect(() => {
        if (augmentedData) {
            setSortedData(sortDataBy(augmentedData, sorting, ascending).slice(0, props.limit || augmentedData.length));
        }
    }, [augmentedData, sorting, ascending]);

    const setSortFn = (directive) => {
        setSorting(directive);
        if (sorting === directive) {
            setAscending(!ascending);
        }
        setSortedData(sortDataBy(sortedData, directive, !ascending));
    }

    return (
        <table className="list">
            <thead>
                <tr>
                    <th onClick={() => setSortFn("title")}>Title</th>
                    <th className='articledate' onClick={() => setSortFn("date")}>Date</th>
                    <th onClick={() => setSortFn("type")}>Type</th>
                    <th onClick={() => setSortFn("views")}>Views</th>
                </tr>
            </thead>
            <tbody>
                {sortedData && sortedData.map((project) => (
                    <tr key={project.title}>
                        <td className='articletitle'><Link to={encodeURI(`/blog/${project.id}`)}>{project.title}</Link></td>
                        <td className='articledate'>{new Date(project.date).toDateString().slice(4)}</td>
                        <td><span className={`celltag ${project.type}`}>{project.type}</span></td>
                        <td>{project.views}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};


const BlogPage = () => {
    const [currentView, setCurrentView] = React.useState("listview");
    return (
        <Main
            title="Blog"
            description="See Alperen Keles' blog posts."
            hideBar={true}
        >
            <div className="blogpage">
                {/* <div className="view-switcher">
                    <div className="cardview-switcher" onClick={() => setCurrentView("cardview")}>Cardview <FontAwesomeIcon icon="fa-solid fa-th-large" /></div>
                    <div className="listview-switcher" onClick={() => setCurrentView("listview")}>Listview <FontAwesomeIcon icon="fa-solid fa-list" /></div>
                </div> */}
                {
                    currentView === "listview" ?
                        <div className="articlelist">
                            <ArticleList />
                        </div>
                        :
                        <div className="cardview">
                            <ArticleCards />
                        </div>
                }
            </div>
        </Main>
    )
};

export default BlogPage;
