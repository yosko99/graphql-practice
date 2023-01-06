module.exports = `#graphql
    interface BaseError {
        message: String!
    }

    type InvalidInputError implements BaseError {
        message: String!
    }
    
    type NotFoundError implements BaseError {
        message: String!
    }
    
    type UnknownError implements BaseError {
        message: String!
    }
    
    type NotAllowedError implements BaseError {
        message: String!
    }

    type SuccessfullRequest {
        message: String!
    }
`;
