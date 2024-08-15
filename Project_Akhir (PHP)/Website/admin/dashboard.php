<?php
include 'partials/header.php';
?>



<section class="dashboard">
    <div class="container dashboard-container">
      <button id="show-sidebar-btn" class="sidebar-toggle"><i class="uil uil-angle-double-right"></i></button>
      <button id="hide-sidebar-btn" class="sidebar-toggle"><i class="uil uil-angle-double-left"></i></button>
        <aside>
            <ul>
                <li>
                    <a href="add-post.php"><i class="uil uil-pen"></i>
                        <h5>Add Post</h5>
                    </a>
                </li>
                <li>
                    <a href="dashboard.php"  class="active"><i class="uil uil-file-search-alt"></i>
                        <h5>Manage Post</h5>
                    </a>
                </li>
                <li>
                    <a href="add-user.php"><i class="uil uil-user-plus"></i>
                        <h5>Add User</h5>
                    </a>
                </li>
                <li>
                    <a href="manage-users.php"><i class="uil uil-users-alt"></i>
                        <h5>Manage User</h5>
                    </a>
                </li>
                <li>
                    <a href="add-category.php"><i class="uil uil-edit"></i>
                        <h5>Add Category</h5>
                    </a>
                </li>
                <li>
                    <a href="manage-categories.php" ><i class="uil uil-file-edit-alt"></i>
                        <h5>Manage Category</h5>
                    </a>
                </li>
            </ul>
        </aside>
        <main>
            <h2>Manage Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td>Wild Life</td>
                        <td><a href="edit-post.php" class="btn sm">Edit</a></td>
                        <td><a href="delete-post.php" class="btn sm danger">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td>Art</td>
                        <td><a href="edit-post.php" class="btn sm">Edit</a></td>
                        <td><a href="delete-post.php" class="btn sm danger">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td>Music</td>
                        <td><a href="edit-post.php" class="btn sm">Edit</a></td>
                        <td><a href="delete-post.php" class="btn sm danger">Delete</a></td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                        <td>Food</td>
                        <td><a href="edit-post.php" class="btn sm">Edit</a></td>
                        <td><a href="delete-post.php" class="btn sm danger">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</section>



<?php
include '../partials/footer.php';
?>