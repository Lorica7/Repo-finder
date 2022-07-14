import {useState, useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const UserSearch = () => {
  const [text, setText] = useState ('');

  const {users, searchUsers, clearUsers} = useContext (GithubContext);
  const {setAlert} = useContext (AlertContext);

  const handleChange = e => setText (e.target.value);

  const handleSubmit = e => {
    console.log (e);
    e.preventDefault ();
    if (text === '') {
      setAlert ('Please enter something', 'error');
    } else {
      searchUsers (text);
      setText ('');
    }
  };

  return (
    <div className="grid space-y-6 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-80 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                type="submit"
                onClick={handleSubmit}
              >
                Go
              </button>
            </div>
          </div>

        </form>
      </div>
      {users.length > 0 &&
        <div>
          <button
            className="btb btn-primary p-3 rounded 

             btn-large mb-6"
            onClick={clearUsers}
          >
            Clear
          </button>
        </div>}

    </div>
  );
};

export default UserSearch;
