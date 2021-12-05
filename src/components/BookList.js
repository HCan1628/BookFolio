import React from "react";
import "./BookList.css";
import Book from "./Book";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const { books } = contextBook;
              const { changeTheme, isDarkTheme, dark, light } = contextTheme;
              const theme = isDarkTheme ? dark : light;

              return (
                <section
                  className="page-section"
                  style={{
                    background: theme.bg,
                    color: theme.txt,
                  }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        -Book Folio-
                      </h2>
                      <div>
                        <figure>
                          <blockquote className="blockquote section-subheading text-muted">
                            <p>
                              Üç günlük dünya için gayret üstüne gayret, ebedi
                              bir yaşam için gayret yok hayret.
                            </p>
                          </blockquote>
                          <figcaption className="blockquote-footer">
                            Necip Fazıl Kısakürek
                          </figcaption>
                        </figure>
                      </div>

                      <button
                        type="button"
                        className="btn btn-sm btn-warning m-2"
                        onClick={changeTheme}
                      >
                        Change Theme
                      </button>
                    </div>
                    <div className="row">
                      {books.map((book, i) => {
                        return <Book book={book} key={i} />;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
