let listPost = [];

const MAXPOST = 5;

const post = {
    title: '',
    content: '',
    author: ''
};

const createPost = (newPost) => {
    if (listPost.length >= MAXPOST) {
        console.log('Danh sách bài viết đã đầy');
    } else {
        listPost = [...listPost, newPost];
    }
};

const displayAllPosts = () => {
    console.log('Thông tin các bài viết:');
    for (const post of listPost) {
        console.log(`Tiêu đề: ${post.title}`);
        console.log(`Nội dung: ${post.content}`);
        console.log(`Tác giả: ${post.author}`);
        console.log('----------------');
    }
};

const searchPost = (keyword) => {
    const result = listPost.filter(post => 
        post.title.includes(keyword) || 
        post.content.includes(keyword) || 
        post.author.includes(keyword)
    );
    console.log('Kết quả tìm kiếm:');
    if (result.length === 0) {
        console.log('Không tìm thấy bài viết phù hợp');
    } else {
        result.forEach(post => {
            console.log(`Tiêu đề: ${post.title}`);
            console.log(`Nội dung: ${post.content}`);
            console.log(`Tác giả: ${post.author}`);
            console.log('----------------');
        });
    }
};

export { createPost, displayAllPosts, searchPost };
