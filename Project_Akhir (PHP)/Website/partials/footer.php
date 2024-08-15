<footer>
            <div class="footer-socials">
              <a href="https://www.youtube.com/channel/UCyl-unfK6BLym2SxV59Z5iw" target="_blank"><i class="uil uil-youtube"></i></a>
              <a href="https://twitter.com/RasyaPratama6P" target="_blank"><i class="uil uil-twitter"></i></a>
              <a href="https://www.instagram.com/kentangbest/" target="_blank"><i class="uil uil-instagram"></i></a>
              <a href="https://www.facebook.com/killer.exe16/" target="_blank"><i class="uil uil-facebook-f"></i></a>
              <a href="https://www.linkedin.com/in/rasya-pratama-880bbb253/" target="_blank"><i class="uil uil-linkedin"></i></a>
              <a href="https://web.telegram.org/k/" target="_blank"><i class="uil uil-telegram-alt"></i></a>
            </div>
            <div class="container footer-container">
              <article>
              <?php 
            $all_categories_query = "SELECT * FROM categories";
            $all_categories = mysqli_query($connection, $all_categories_query);
              ?>
              <h4>Categories</h4>
                <?php while($category = mysqli_fetch_assoc($all_categories)) : ?>
                  <ul>
                    <li><a href="<?= ROOT_URL ?>category-posts.php?id=<?= $category['id'] ?>"><?= $category['title'] ?></a></li>
                  </ul>
                <?php endwhile ?>
              </article>
              <article>
                <h4>Support</h4>
                <ul>
                  <li><a href="">Online Support</a></li>
                  <li><a href="">Call Number</a></li>
                  <li><a href="">Email</a></li>
                  <li><a href="">Social Support</a></li>
                  <li><a href="">Location</a></li>
                </ul>
              </article>
              <article>
                <h4>Blog</h4>
                <ul>
                  <li><a href="">Safety</a></li>
                  <li><a href="">Repair</a></li>
                  <li><a href="">Recent</a></li>
                  <li><a href="">Popular</a></li>
                  <li><a href="">Categories</a></li>
                </ul>
              </article>
              <article>
                <h4>Permalinks</h4>
                <ul>
                  <li><a href="<?= ROOT_URL ?>">Home</a></li>
                  <li><a href="<?= ROOT_URL ?>blog.php">Blog</a></li>
                  <li><a href="<?= ROOT_URL ?>about.php">About</a></li>
                  <li><a href="<?= ROOT_URL ?>services.php">Services</a></li>
                  <li><a href="<?= ROOT_URL ?>contact.php">Contact</a></li>
                </ul>
              </article>
            </div>
            <div class="footer-copyright">
              <small>Copyright &copy; 2023</small>
            </div>
          </footer>



          <script src="js/main.js"></script>
    </body>
  </html>
