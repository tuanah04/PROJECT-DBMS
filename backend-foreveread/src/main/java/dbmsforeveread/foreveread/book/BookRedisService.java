
package dbmsforeveread.foreveread.book;

import dbmsforeveread.foreveread.config.BaseRedisService;

import java.util.List;

public interface BookRedisService  {
    // clear cache
    void addBookToRedis (BookDTO book);
    void deleteBookToRedis (String id);
    BookDTO getBookFromRedis (String id);

}
