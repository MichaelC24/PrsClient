import { useEffect, useState } from "react";
import { User } from "./User";
import { userAPI } from "./UsersAPI";
import UserCard from "./UsersCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

function UsersPage() {
  const [users, setUser] = useState<User[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadUsers() {
    try {
      setBusy(true);
      const data = await userAPI.list();
      setUser(data);
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  async function remove(user: User) {
    if (confirm("Are you sure you want to delete this User?")) {
      if (user.id) {
        await userAPI.delete(user.id);
        let updatedUsers = users.filter((v) => v.id !== user.id);
        setUser(updatedUsers);
        toast.success("Successfully deleted.");
      }
    }
  }

  return (
    <>
      {busy && (
        <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
      <header className=" mt-3 ms-4 d-flex justify-content-between">
        <h3>Users</h3>
        <Link to={"/user/create"} className="btn btn-outline-secondary">
          + Add User
        </Link>
      </header>
      <hr />
      <section className="p-5">
        <section className="border border-1 p-3 bg-body-secondary rounded d-flex flex-wrap">
          <section className="d-flex flex-wrap gap-5 list">
            {users.map((user) => (
              <UserCard key={user.id} user={user} onRemove={remove} />
            ))}
          </section>
        </section>
      </section>
    </>
  );
}

export default UsersPage;
