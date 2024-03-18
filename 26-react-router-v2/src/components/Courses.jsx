import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import courses from "../data/courses";
import { useEffect, useState } from "react";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    return sortedCourses;
}

const Courses = () => {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const navigate = useNavigate();
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSourtedCourses] = useState(
        sortCourses(courses, sortKey)
    );

    //sort
    const [selectedOption, setSelectedOption] = useState(sortKey);
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
        setSortKey(event.target.value);
        sortCourses(courses, selectedOption);
    };

    //

    useEffect(() => {
        //sort
        navigate(`?sort=${selectedOption}`);
        setSourtedCourses(sortCourses(courses, selectedOption));
        //
        if (!SORT_KEYS.includes(sortKey)) {
            navigate(".");
            setSortKey();
            setSourtedCourses([...courses]);
        }
    }, [sortKey, navigate, selectedOption]);

    console.log(sortedCourses);

    return (
        <>
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : `Courses`}</h1>
            <label>Sort by: </label>
            <select value={selectedOption} onChange={handleDropdownChange}>
                <option value="">Default</option>
                <option value="title">Title</option>
                <option value="slug">Slug</option>
                <option value="id">Id</option>
            </select>
            {sortedCourses.map((course) => (
                <div key={course.id}>
                    <Link to={course.slug} className="courseLink">
                        {course.title}
                    </Link>
                </div>
            ))}
        </>
    );
};

export default Courses;
