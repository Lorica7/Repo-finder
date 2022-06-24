function UserSearch () {
  return (
    <div className="grid grid-cols-1 xl:grid-cols2 ls:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form>
          <div className="form-control">
            <div className="relative">
              <input className="w-full pr-40 bg-gray-200 input input-lg text-black" />
            </div>
          </div>

        </form>
      </div>
      <div>
        <button className="btb btn-ghost btn-large">Clear</button>
      </div>
    </div>
  );
}
